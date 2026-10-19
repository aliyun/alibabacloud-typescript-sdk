// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMessageVisibilityRequest extends $dara.Model {
  /**
   * @remarks
   * The temporary handle of the message returned after the last consumption.
   * 
   * @example
   * 1-ODU4OTkzNDU5My0xNDMyNzI3ODI3LTItOA==
   */
  receiptHandle?: string;
  /**
   * @remarks
   * The countdown from the current moment until the message becomes Active again. Valid values: 1 to 43200. Unit: seconds (1 second to 12 hours).
   * 
   * @example
   * 50
   */
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      receiptHandle: 'receiptHandle',
      visibilityTimeout: 'visibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiptHandle: 'string',
      visibilityTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

