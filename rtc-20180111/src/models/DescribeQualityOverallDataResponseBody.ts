// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityOverallDataResponseBodyQualityOverallDataNodes extends $dara.Model {
  /**
   * @example
   * 1615831200
   */
  x?: string;
  /**
   * @example
   * 1.0000
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallData extends $dara.Model {
  /**
   * @example
   * 0.9376
   */
  average?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  /**
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallDataNodes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBody extends $dara.Model {
  qualityOverallData?: DescribeQualityOverallDataResponseBodyQualityOverallData[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOverallData: 'QualityOverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOverallData: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityOverallData)) {
      $dara.Model.validateArray(this.qualityOverallData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

