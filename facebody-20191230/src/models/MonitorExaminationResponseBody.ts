// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorExaminationResponseBodyDataFaceInfoPose extends $dara.Model {
  /**
   * @example
   * -0.9185499548912048
   */
  pitch?: number;
  /**
   * @example
   * -0.18541647493839264
   */
  roll?: number;
  /**
   * @example
   * 8.095342636108398
   */
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataFaceInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  completeness?: number;
  /**
   * @example
   * 1
   */
  faceNumber?: number;
  pose?: MonitorExaminationResponseBodyDataFaceInfoPose;
  static names(): { [key: string]: string } {
    return {
      completeness: 'Completeness',
      faceNumber: 'FaceNumber',
      pose: 'Pose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeness: 'number',
      faceNumber: 'number',
      pose: MonitorExaminationResponseBodyDataFaceInfoPose,
    };
  }

  validate() {
    if(this.pose && typeof (this.pose as any).validate === 'function') {
      (this.pose as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataPersonInfoCellPhone extends $dara.Model {
  /**
   * @example
   * 0.39076218008995056
   */
  score?: number;
  /**
   * @example
   * 0.6
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataPersonInfoEarPhone extends $dara.Model {
  /**
   * @example
   * 0.7980290651321411
   */
  score?: number;
  /**
   * @example
   * 0.6
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyDataPersonInfo extends $dara.Model {
  cellPhone?: MonitorExaminationResponseBodyDataPersonInfoCellPhone;
  earPhone?: MonitorExaminationResponseBodyDataPersonInfoEarPhone;
  /**
   * @example
   * 1
   */
  personNumber?: number;
  static names(): { [key: string]: string } {
    return {
      cellPhone: 'CellPhone',
      earPhone: 'EarPhone',
      personNumber: 'PersonNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellPhone: MonitorExaminationResponseBodyDataPersonInfoCellPhone,
      earPhone: MonitorExaminationResponseBodyDataPersonInfoEarPhone,
      personNumber: 'number',
    };
  }

  validate() {
    if(this.cellPhone && typeof (this.cellPhone as any).validate === 'function') {
      (this.cellPhone as any).validate();
    }
    if(this.earPhone && typeof (this.earPhone as any).validate === 'function') {
      (this.earPhone as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0.28805577754974365
   */
  chatScore?: number;
  faceInfo?: MonitorExaminationResponseBodyDataFaceInfo;
  personInfo?: MonitorExaminationResponseBodyDataPersonInfo;
  /**
   * @example
   * 0.5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      chatScore: 'ChatScore',
      faceInfo: 'FaceInfo',
      personInfo: 'PersonInfo',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatScore: 'number',
      faceInfo: MonitorExaminationResponseBodyDataFaceInfo,
      personInfo: MonitorExaminationResponseBodyDataPersonInfo,
      threshold: 'number',
    };
  }

  validate() {
    if(this.faceInfo && typeof (this.faceInfo as any).validate === 'function') {
      (this.faceInfo as any).validate();
    }
    if(this.personInfo && typeof (this.personInfo as any).validate === 'function') {
      (this.personInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorExaminationResponseBody extends $dara.Model {
  data?: MonitorExaminationResponseBodyData;
  /**
   * @example
   * D0F6EB94-73B6-4CB8-B266-22D2F221C475
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
      data: MonitorExaminationResponseBodyData,
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

