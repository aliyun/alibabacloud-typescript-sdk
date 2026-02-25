// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotDBResponseBodyFpShotDBListFpShotDB extends $dara.Model {
  description?: string;
  fpDBId?: string;
  modelId?: number;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fpDBId: 'FpDBId',
      modelId: 'ModelId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fpDBId: 'string',
      modelId: 'number',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponseBodyFpShotDBList extends $dara.Model {
  fpShotDB?: ListFpShotDBResponseBodyFpShotDBListFpShotDB[];
  static names(): { [key: string]: string } {
    return {
      fpShotDB: 'FpShotDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDB: { 'type': 'array', 'itemType': ListFpShotDBResponseBodyFpShotDBListFpShotDB },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotDB)) {
      $dara.Model.validateArray(this.fpShotDB);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponseBodyNonExistIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFpShotDBResponseBody extends $dara.Model {
  fpShotDBList?: ListFpShotDBResponseBodyFpShotDBList;
  nonExistIds?: ListFpShotDBResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotDBList: 'FpShotDBList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDBList: ListFpShotDBResponseBodyFpShotDBList,
      nonExistIds: ListFpShotDBResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotDBList && typeof (this.fpShotDBList as any).validate === 'function') {
      (this.fpShotDBList as any).validate();
    }
    if(this.nonExistIds && typeof (this.nonExistIds as any).validate === 'function') {
      (this.nonExistIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

