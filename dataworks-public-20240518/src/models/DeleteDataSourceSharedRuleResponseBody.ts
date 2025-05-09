// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataSourceSharedRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 64B-587A-8CED-969E1973887FXXX-TT
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the data source sharing rule is deleted successfully. The value is as follows:
   * -true: The request is successful.
   * -false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

