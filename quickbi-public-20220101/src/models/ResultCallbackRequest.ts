// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResultCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * This parameter is required.
   * 
   * @example
   * c5ea0db8-****-****-9081-04bc0df4c6a3
   */
  applicationId?: string;
  /**
   * @remarks
   * The reason for the approval.
   * 
   * This parameter is required.
   * 
   * @example
   * You are not a Division A analyst.
   */
  handleReason?: string;
  /**
   * @remarks
   * Approval result:
   * 
   * *   1: passed
   * *   2: rejected
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      handleReason: 'HandleReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      handleReason: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

