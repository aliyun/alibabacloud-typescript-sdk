// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The unique instance ID.
   */
  instanceId?: string;
  /**
   * @remarks
   * The raw string value of the legacy configuration, used for backward compatibility.
   */
  legacyRaw?: string;
  /**
   * @remarks
   * The legacy type of the data source, used for backward compatibility.
   */
  legacyType?: string;
  /**
   * @remarks
   * The product category of the data source.
   */
  productCategory?: string;
  /**
   * @remarks
   * The region ID.
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      productCategory: 'productCategory',
      regionId: 'regionId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      legacyRaw: 'string',
      legacyType: 'string',
      productCategory: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

