// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigTemplatesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration template.
   * 
   * @example
   * {"name":"William"}
   */
  content?: string;
  /**
   * @remarks
   * The description of the configuration template.
   * 
   * @example
   * Test configuration template
   */
  description?: string;
  /**
   * @remarks
   * The data format of the configuration template.
   * 
   * @example
   * JSON
   */
  format?: string;
  /**
   * @remarks
   * The time when the configuration template was created.
   * 
   * @example
   * 1638171689626
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the configuration template was updated.
   * 
   * @example
   * 1638171689626
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the configuration template.
   * 
   * @example
   * 3d84efaf-37d9-49fb-a3a8-b38d5c2b460c
   */
  id?: string;
  /**
   * @remarks
   * The name of the configuration template.
   * 
   * @example
   * config-tmpl-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      format: 'Format',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      format: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The configuration templates.
   */
  result?: ListConfigTemplatesResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of configuration templates.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListConfigTemplatesResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The result of the request.
   */
  data?: ListConfigTemplatesResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4D9F-DR94-FD****************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListConfigTemplatesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

