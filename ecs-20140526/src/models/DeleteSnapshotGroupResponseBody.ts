// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
    };
  }

  validate() {
    if(Array.isArray(this.relatedItem)) {
      $dara.Model.validateArray(this.relatedItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress extends $dara.Model {
  errorCode?: string;
  errorMsg?: string;
  operationStatus?: string;
  relatedItemSet?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      operationStatus: 'OperationStatus',
      relatedItemSet: 'RelatedItemSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      operationStatus: 'string',
      relatedItemSet: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet,
    };
  }

  validate() {
    if(this.relatedItemSet && typeof (this.relatedItemSet as any).validate === 'function') {
      (this.relatedItemSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotGroupResponseBodyOperationProgressSet extends $dara.Model {
  operationProgress?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress[];
  static names(): { [key: string]: string } {
    return {
      operationProgress: 'OperationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgress: { 'type': 'array', 'itemType': DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress },
    };
  }

  validate() {
    if(Array.isArray(this.operationProgress)) {
      $dara.Model.validateArray(this.operationProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotGroupResponseBody extends $dara.Model {
  operationProgressSet?: DeleteSnapshotGroupResponseBodyOperationProgressSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EDE885A-FDC1-4FAE-BC44-6EACAEA6CC6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationProgressSet: 'OperationProgressSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgressSet: DeleteSnapshotGroupResponseBodyOperationProgressSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operationProgressSet && typeof (this.operationProgressSet as any).validate === 'function') {
      (this.operationProgressSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

