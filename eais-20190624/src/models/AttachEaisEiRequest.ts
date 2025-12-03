// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEaisEiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp14ws9hbt1oe0u9****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  eiInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      eiInstanceId: 'EiInstanceId',
      eiInstanceType: 'EiInstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      eiInstanceId: 'string',
      eiInstanceType: 'string',
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

