// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNeedAsyncQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   **suspicious**: alerts
   * 
   * This parameter is required.
   * 
   * @example
   * suspicious
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

