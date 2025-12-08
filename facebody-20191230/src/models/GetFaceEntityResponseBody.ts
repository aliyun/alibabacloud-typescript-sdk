// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFaceEntityResponseBodyDataFaces extends $dara.Model {
  /**
   * @example
   * 3
   */
  faceId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityResponseBodyData extends $dara.Model {
  /**
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * 66
   */
  entityId?: string;
  faces?: GetFaceEntityResponseBodyDataFaces[];
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      faces: 'Faces',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      faces: { 'type': 'array', 'itemType': GetFaceEntityResponseBodyDataFaces },
      labels: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceEntityResponseBody extends $dara.Model {
  data?: GetFaceEntityResponseBodyData;
  /**
   * @example
   * DA7CAFEB-0A37-4496-9CDF-E3DBB6309CB2
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
      data: GetFaceEntityResponseBodyData,
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

