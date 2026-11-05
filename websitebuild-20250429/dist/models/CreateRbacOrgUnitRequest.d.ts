import * as $dara from '@darabonba/typescript';
export declare class CreateRbacOrgUnitRequest extends $dara.Model {
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The organization parameters.
     *
     * @example
     * {"name":"xx","path":"root.shanghai"}
     */
    orgUnitData?: string;
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
