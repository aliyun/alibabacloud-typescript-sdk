// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore extends $dara.Model {
  /**
   * @remarks
   * The value of the log keyword.
   * 
   * @example
   * channel_id
   */
  fieldKey?: string;
  /**
   * @remarks
   * The log keyword.
   * 
   * @example
   * put_request
   */
  logKey?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

