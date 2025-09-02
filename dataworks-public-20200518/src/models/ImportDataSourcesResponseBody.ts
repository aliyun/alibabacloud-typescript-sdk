// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the data sources failed to be imported. If the data sources were imported, this parameter is left empty.
   * 
   * @example
   * Data source DEV XXX already exists
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the data sources were imported. Valid values:
   * 
   * *   true: All data sources were imported.
   * *   false: Specific data sources failed to be imported. You can troubleshoot issues based on the Message parameter.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the imported data sources.
   */
  data?: ImportDataSourcesResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ImportDataSourcesResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

