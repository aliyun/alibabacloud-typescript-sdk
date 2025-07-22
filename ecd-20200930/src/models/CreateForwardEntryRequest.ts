// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  externalIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  externalPort?: string;
  forwardEntryName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  forwardTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  internalIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  internalPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ipProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryName: 'ForwardEntryName',
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryName: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
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

