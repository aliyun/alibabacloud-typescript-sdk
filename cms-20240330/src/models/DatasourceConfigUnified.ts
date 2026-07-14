// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasourceConfigUnified extends $dara.Model {
  instanceId?: string;
  legacyRaw?: string;
  legacyType?: string;
  productCategory?: string;
  regionId?: string;
  /**
   * @remarks
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

