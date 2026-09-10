// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerReaderRequestDataSourceDescriptor extends $dara.Model {
  /**
   * @example
   * test_ds318_hangzhou_0428
   */
  dsName?: string;
  static names(): { [key: string]: string } {
    return {
      dsName: 'dsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostInnerReaderRequest extends $dara.Model {
  dataSourceDescriptor?: PostInnerReaderRequestDataSourceDescriptor;
  /**
   * @example
   * ds_dolphin_prod
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceDescriptor: 'dataSourceDescriptor',
      dataSourceName: 'dataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceDescriptor: PostInnerReaderRequestDataSourceDescriptor,
      dataSourceName: 'string',
    };
  }

  validate() {
    if(this.dataSourceDescriptor && typeof (this.dataSourceDescriptor as any).validate === 'function') {
      (this.dataSourceDescriptor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

