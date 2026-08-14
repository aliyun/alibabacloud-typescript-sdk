// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCnameReusesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

