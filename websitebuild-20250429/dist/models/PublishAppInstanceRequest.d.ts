import * as $dara from '@darabonba/typescript';
export declare class PublishAppInstanceRequest extends $dara.Model {
    artifactDigest?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250821161210000001
     */
    bizId?: string;
    candidateId?: string;
    /**
     * @remarks
     * The deployment channel.
     *
     * @example
     * PC
     */
    deployChannel?: string;
    /**
     * @remarks
     * The publish description.
     *
     * @example
     * CREATE_BY_NLB.nlb-jcvs5sm9l8um84zbfa
     */
    description?: string;
    ext?: string;
    idempotencyKey?: string;
    /**
     * @remarks
     * The logical version number.
     *
     * @example
     * 111
     */
    logicalNumber?: number;
    platformAppid?: string;
    pluginDeclarationHash?: string;
    privacyDraftId?: string;
    privacyRevision?: string;
    /**
     * @remarks
     * The publish number.
     *
     * @example
     * 123
     */
    publishNumber?: string;
    publishOrderId?: number;
    uploadSequence?: number;
    /**
     * @remarks
     * The action.
     *
     * @example
     * BUILD
     */
    weappAction?: string;
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
