import * as $dara from '@darabonba/typescript';
export declare class CreateGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The comments.
     *
     * The maximum length is 128 characters.
     *
     * @example
     * Development team
     */
    comments?: string;
    /**
     * @remarks
     * The display name of the user group.
     *
     * The maximum length is 24 characters.
     *
     * @example
     * Dev-Team
     */
    displayName?: string;
    /**
     * @remarks
     * The name of the user group. This parameter is required.
     *
     * The maximum length is 64 characters. It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     *
     * @example
     * Dev-Team
     */
    groupName?: string;
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
