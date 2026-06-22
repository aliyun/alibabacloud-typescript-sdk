// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMessageVisibilityRequest extends $dara.Model {
  receiptHandle?: string;
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

