import * as $dara from '@darabonba/typescript';
export declare class AuthorizeRCSecurityGroupPermissionShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The rule direction. Valid values:
     *
     * - **ingress**: inbound traffic to the security group.
     * - **egress**: outbound traffic from the security group.
     *
     * @example
     * ingress
     */
    direction?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The security group ID.
     *
     * @example
     * sg-2ze27hs990o2hn9****
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The security group information.
     */
    securityGroupPermissionsShrink?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
