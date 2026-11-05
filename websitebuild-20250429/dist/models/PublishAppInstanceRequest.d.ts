import * as $dara from '@darabonba/typescript';
export declare class PublishAppInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250821161210000001
     */
    bizId?: string;
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
    /**
     * @remarks
     * The logical version number.
     *
     * @example
     * 111
     */
    logicalNumber?: number;
    /**
     * @remarks
     * The publish number.
     *
     * @example
     * 123
     */
    publishNumber?: string;
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
