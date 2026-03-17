// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayPortRouteProtocolRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 109790620697****
   */
  resourceUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sag-sv487b7lno6go5****
   */
  sagInsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sagf4dk****
   */
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

