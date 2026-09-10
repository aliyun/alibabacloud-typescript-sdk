// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure idempotence. This parameter works only if the cloud product supports idempotence.
   * 
   * @example
   * 1e810dfe1468721d0664a49b9d9f74f4
   */
  clientToken?: string;
  filter?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. This parameter is required if the cloud product is region-specific.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      filter: 'filter',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

