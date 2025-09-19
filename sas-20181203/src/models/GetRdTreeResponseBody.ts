// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRdTreeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The subfolder.
   */
  children?: any[];
  /**
   * @remarks
   * The ID of the folder in the resource directory.
   * 
   * @example
   * fd-CGA73I****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * Root
   */
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      folderId: 'string',
      folderName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRdTreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The processing result.
   */
  data?: GetRdTreeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
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
      data: GetRdTreeResponseBodyData,
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

