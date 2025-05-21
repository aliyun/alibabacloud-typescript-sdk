// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore extends $dara.Model {
  /**
   * @remarks
   * The value of the log keyword.
   * 
   * @example
   * 255311
   */
  fieldKey?: string;
  /**
   * @remarks
   * The log keyword.
   * 
   * @example
   * taskid
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

