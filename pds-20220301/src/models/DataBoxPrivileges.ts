// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataBoxPrivileges extends $dara.Model {
  featureAttrId?: string;
  featureId?: string;
  quota?: number;
  static names(): { [key: string]: string } {
    return {
      featureAttrId: 'feature_attr_id',
      featureId: 'feature_id',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureAttrId: 'string',
      featureId: 'string',
      quota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

