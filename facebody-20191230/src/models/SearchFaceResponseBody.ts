// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFaceResponseBodyDataMatchListFaceItems extends $dara.Model {
  /**
   * @example
   * 36.820168
   */
  confidence?: number;
  /**
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * U1
   */
  entityId?: string;
  extraData?: string;
  /**
   * @example
   * 001
   */
  faceId?: string;
  /**
   * @example
   * 0.892133
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      dbName: 'DbName',
      entityId: 'EntityId',
      extraData: 'ExtraData',
      faceId: 'FaceId',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      dbName: 'string',
      entityId: 'string',
      extraData: 'string',
      faceId: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyDataMatchListLocation extends $dara.Model {
  /**
   * @example
   * 200
   */
  height?: number;
  /**
   * @example
   * 200
   */
  width?: number;
  /**
   * @example
   * 5
   */
  x?: number;
  /**
   * @example
   * 6
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyDataMatchList extends $dara.Model {
  faceItems?: SearchFaceResponseBodyDataMatchListFaceItems[];
  location?: SearchFaceResponseBodyDataMatchListLocation;
  /**
   * @example
   * 71.7349
   */
  qualitieScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceItems: 'FaceItems',
      location: 'Location',
      qualitieScore: 'QualitieScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceItems: { 'type': 'array', 'itemType': SearchFaceResponseBodyDataMatchListFaceItems },
      location: SearchFaceResponseBodyDataMatchListLocation,
      qualitieScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faceItems)) {
      $dara.Model.validateArray(this.faceItems);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyData extends $dara.Model {
  matchList?: SearchFaceResponseBodyDataMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': SearchFaceResponseBodyDataMatchList },
    };
  }

  validate() {
    if(Array.isArray(this.matchList)) {
      $dara.Model.validateArray(this.matchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBody extends $dara.Model {
  data?: SearchFaceResponseBodyData;
  /**
   * @example
   * 4159e64a-0fe8-436c-a8de-ee531555db3c
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
      data: SearchFaceResponseBodyData,
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

