import * as $dara from '@darabonba/typescript';
export declare class DeleteRbacOrgUnitRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The organization ID.
     *
     * @example
     * f0534aa7-94ec-4368-a34a-310390f66253
     */
    orgUnitId?: string;
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
