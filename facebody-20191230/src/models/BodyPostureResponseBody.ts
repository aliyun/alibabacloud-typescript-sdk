// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BodyPostureResponseBodyDataMetaObject extends $dara.Model {
  /**
   * @example
   * 500
   */
  height?: number;
  /**
   * @example
   * 500
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputsResultsBodiesPositions extends $dara.Model {
  points?: number[];
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputsResultsBodies extends $dara.Model {
  /**
   * @example
   * 0.91309475898742676
   */
  confident?: number;
  /**
   * @example
   * nose
   */
  label?: string;
  positions?: BodyPostureResponseBodyDataOutputsResultsBodiesPositions[];
  static names(): { [key: string]: string } {
    return {
      confident: 'Confident',
      label: 'Label',
      positions: 'Positions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confident: 'number',
      label: 'string',
      positions: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResultsBodiesPositions },
    };
  }

  validate() {
    if(Array.isArray(this.positions)) {
      $dara.Model.validateArray(this.positions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputsResults extends $dara.Model {
  bodies?: BodyPostureResponseBodyDataOutputsResultsBodies[];
  static names(): { [key: string]: string } {
    return {
      bodies: 'Bodies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodies: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResultsBodies },
    };
  }

  validate() {
    if(Array.isArray(this.bodies)) {
      $dara.Model.validateArray(this.bodies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyDataOutputs extends $dara.Model {
  /**
   * @example
   * 1
   */
  humanCount?: number;
  results?: BodyPostureResponseBodyDataOutputsResults[];
  static names(): { [key: string]: string } {
    return {
      humanCount: 'HumanCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      humanCount: 'number',
      results: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputsResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBodyData extends $dara.Model {
  metaObject?: BodyPostureResponseBodyDataMetaObject;
  outputs?: BodyPostureResponseBodyDataOutputs[];
  static names(): { [key: string]: string } {
    return {
      metaObject: 'MetaObject',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaObject: BodyPostureResponseBodyDataMetaObject,
      outputs: { 'type': 'array', 'itemType': BodyPostureResponseBodyDataOutputs },
    };
  }

  validate() {
    if(this.metaObject && typeof (this.metaObject as any).validate === 'function') {
      (this.metaObject as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BodyPostureResponseBody extends $dara.Model {
  data?: BodyPostureResponseBodyData;
  /**
   * @example
   * B854094B-9231-4A54-89AB-C377CB0D237D
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
      data: BodyPostureResponseBodyData,
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

