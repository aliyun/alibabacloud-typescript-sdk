// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DoLogicalDeleteResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtWakeup?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hid?: number;
  interrupt?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  invoker?: string;
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  success?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  taskExtraData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      pk: 'Pk',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      pk: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

