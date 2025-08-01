// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationInstanceListResponseBodyDataResultTags extends $dara.Model {
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationInstanceListResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The node IP address.
   * 
   * @example
   * 10.1.2.3
   */
  ip?: string;
  /**
   * @remarks
   * The application port.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The node tags.
   */
  tags?: GetApplicationInstanceListResponseBodyDataResultTags[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'string',
      tags: { 'type': 'array', 'itemType': GetApplicationInstanceListResponseBodyDataResultTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationInstanceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried nodes.
   */
  result?: GetApplicationInstanceListResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GetApplicationInstanceListResponseBodyDataResult },
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

export class GetApplicationInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetApplicationInstanceListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetApplicationInstanceListResponseBodyData,
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

