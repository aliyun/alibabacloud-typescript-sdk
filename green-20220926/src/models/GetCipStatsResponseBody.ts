// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCipStatsResponseBodyDataLabelStatChartImageTreeChar extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * nonLabel
   */
  name?: string;
  /**
   * @remarks
   * The label proportion.
   * 
   * @example
   * 0.0274
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartTextTreeChart extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * nonLabel
   */
  name?: string;
  /**
   * @remarks
   * The proportion.
   * 
   * @example
   * 0.0274
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartTreeChart extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 疑似政治人物
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.91
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 疑似特定歌曲
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.91
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetCipStatsResponseBodyDataLabelStatChartY extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: number[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataLabelStatChart extends $dara.Model {
  /**
   * @remarks
   * The image label statistics.
   */
  imageTreeChar?: GetCipStatsResponseBodyDataLabelStatChartImageTreeChar[];
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * nickNameDetection
   */
  serviceCode?: string;
  /**
   * @remarks
   * The text label statistics.
   */
  textTreeChart?: GetCipStatsResponseBodyDataLabelStatChartTextTreeChart[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 117
   */
  totalCount?: number;
  /**
   * @remarks
   * The tree view.
   */
  treeChart?: GetCipStatsResponseBodyDataLabelStatChartTreeChart[];
  /**
   * @remarks
   * The audio tree view.
   */
  voiceTreeChart?: GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart[];
  /**
   * @remarks
   * The X value of the coordinate point.
   */
  x?: string[];
  /**
   * @remarks
   * The Y value of the coordinate point.
   */
  y?: GetCipStatsResponseBodyDataLabelStatChartY[];
  static names(): { [key: string]: string } {
    return {
      imageTreeChar: 'ImageTreeChar',
      serviceCode: 'ServiceCode',
      textTreeChart: 'TextTreeChart',
      totalCount: 'TotalCount',
      treeChart: 'TreeChart',
      voiceTreeChart: 'VoiceTreeChart',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTreeChar: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartImageTreeChar },
      serviceCode: 'string',
      textTreeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartTextTreeChart },
      totalCount: 'number',
      treeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartTreeChart },
      voiceTreeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartY },
    };
  }

  validate() {
    if(Array.isArray(this.imageTreeChar)) {
      $dara.Model.validateArray(this.imageTreeChar);
    }
    if(Array.isArray(this.textTreeChart)) {
      $dara.Model.validateArray(this.textTreeChart);
    }
    if(Array.isArray(this.treeChart)) {
      $dara.Model.validateArray(this.treeChart);
    }
    if(Array.isArray(this.voiceTreeChart)) {
      $dara.Model.validateArray(this.voiceTreeChart);
    }
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataY extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: number[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataZ extends $dara.Model {
  /**
   * @remarks
   * The count.
   */
  data?: number[];
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The label usage chart.
   */
  labelStatChart?: GetCipStatsResponseBodyDataLabelStatChart[];
  /**
   * @remarks
   * The total count by category.
   */
  totalStat?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The list of UIDs.
   */
  uids?: string[];
  /**
   * @remarks
   * The X value of the coordinate point.
   */
  x?: string[];
  /**
   * @remarks
   * The Y value of the coordinate point.
   */
  y?: GetCipStatsResponseBodyDataY[];
  /**
   * @remarks
   * The hit data.
   */
  z?: GetCipStatsResponseBodyDataZ[];
  static names(): { [key: string]: string } {
    return {
      labelStatChart: 'LabelStatChart',
      totalStat: 'TotalStat',
      uids: 'Uids',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelStatChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChart },
      totalStat: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      uids: { 'type': 'array', 'itemType': 'string' },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataY },
      z: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataZ },
    };
  }

  validate() {
    if(Array.isArray(this.labelStatChart)) {
      $dara.Model.validateArray(this.labelStatChart);
    }
    if(this.totalStat) {
      $dara.Model.validateMap(this.totalStat);
    }
    if(Array.isArray(this.uids)) {
      $dara.Model.validateArray(this.uids);
    }
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    if(Array.isArray(this.z)) {
      $dara.Model.validateArray(this.z);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code, which is the same as the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCipStatsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID assigned by the backend. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetCipStatsResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
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

