// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSource } from "./DataSource";


export class ValidateDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameter. For more information, see [DataSource](https://help.aliyun.com/document_detail/170005.html).
   */
  body?: DataSource;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DataSource,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

