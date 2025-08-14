// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosMcpServersResponseBodyDataPageItemsVersionDetail extends $dara.Model {
  /**
   * @example
   * true
   */
  isLatest?: boolean;
  /**
   * @example
   * 2025-07-16
   */
  releaseDate?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      isLatest: 'Is_latest',
      releaseDate: 'Release_date',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLatest: 'boolean',
      releaseDate: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosMcpServersResponseBodyDataPageItems extends $dara.Model {
  capabilities?: string[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * mcp-sse
   */
  frontProtocol?: string;
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 2385420b-6176-4a37-aba4-d3d382e4bb84
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * stdio
   */
  protocol?: string;
  /**
   * @example
   * 1.1.0
   */
  version?: string;
  versionDetail?: ListNacosMcpServersResponseBodyDataPageItemsVersionDetail;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'Capabilities',
      description: 'Description',
      frontProtocol: 'FrontProtocol',
      id: 'Id',
      name: 'Name',
      protocol: 'Protocol',
      version: 'Version',
      versionDetail: 'VersionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      frontProtocol: 'string',
      id: 'string',
      name: 'string',
      protocol: 'string',
      version: 'string',
      versionDetail: ListNacosMcpServersResponseBodyDataPageItemsVersionDetail,
    };
  }

  validate() {
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    if(this.versionDetail && typeof (this.versionDetail as any).validate === 'function') {
      (this.versionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosMcpServersResponseBodyData extends $dara.Model {
  pageItems?: ListNacosMcpServersResponseBodyDataPageItems[];
  /**
   * @remarks
   * pageNumber.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * pagesAvailable.
   * 
   * @example
   * 1
   */
  pagesAvailable?: number;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageItems: 'PageItems',
      pageNumber: 'PageNumber',
      pagesAvailable: 'PagesAvailable',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ListNacosMcpServersResponseBodyDataPageItems },
      pageNumber: 'number',
      pagesAvailable: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageItems)) {
      $dara.Model.validateArray(this.pageItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosMcpServersResponseBody extends $dara.Model {
  data?: ListNacosMcpServersResponseBodyData;
  /**
   * @example
   * ADDD8AB7-8D1C-4697-A83E-410D2607****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListNacosMcpServersResponseBodyData,
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

