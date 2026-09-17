// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerReaderRequestDataSourceDescriptor extends $dara.Model {
  /**
   * @remarks
   * The data source name. Exact match and fuzzy match are supported.
   * 
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
  /**
   * @remarks
   * The fallback description used when the data source is missing. Use this parameter to pass the complete data source description information in the request parameters (Plan B).
   */
  dataSourceDescriptor?: PostInnerReaderRequestDataSourceDescriptor;
  /**
   * @remarks
   * The data source name. The discovery task uses this field as the dimension identifier.
   * 
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

