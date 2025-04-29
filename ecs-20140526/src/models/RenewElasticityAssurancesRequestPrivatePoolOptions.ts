// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewElasticityAssurancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of elasticity assurances.
   * 
   * **Limits**: You can renew up to 20 elasticity assurances at a time.
   * 
   * You can call the [DescribeElasticityAssurances](https://help.aliyun.com/document_detail/2679748.html) operation to query the elasticity assurances that you purchased.
   */
  id?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

