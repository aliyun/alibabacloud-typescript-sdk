// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiPluginsResponseBodyApiPlugins extends $dara.Model {
  description?: string;
  draftedConfigJson?: string;
  /**
   * @example
   * 1666230851000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1641891940000
   */
  gmtModified?: number;
  /**
   * @example
   * 7c0e5b5e-a839-4999-8301-2c7d07a1f16f
   */
  instanceId?: string;
  name?: string;
  publishedConfigJson?: string;
  /**
   * @example
   * Drafted
   */
  status?: string;
  /**
   * @example
   * Function
   */
  type?: string;
  /**
   * @example
   * e1a3c448-20cf-4586-8aa2-4cdca75f7c20
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      draftedConfigJson: 'DraftedConfigJson',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      name: 'Name',
      publishedConfigJson: 'PublishedConfigJson',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      draftedConfigJson: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      name: 'string',
      publishedConfigJson: 'string',
      status: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiPluginsResponseBody extends $dara.Model {
  apiPlugins?: ListApiPluginsResponseBodyApiPlugins[];
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiPlugins: 'ApiPlugins',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPlugins: { 'type': 'array', 'itemType': ListApiPluginsResponseBodyApiPlugins },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiPlugins)) {
      $dara.Model.validateArray(this.apiPlugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

