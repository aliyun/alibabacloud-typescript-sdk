// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEaiAllRequest extends $dara.Model {
  /**
   * @example
   * i-bp1fvhi60e1zizsp****
   */
  clientInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hza1ahi0uuw0re33****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

