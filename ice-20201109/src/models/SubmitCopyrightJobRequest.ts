// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  media?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  media?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.mp4"}
   */
  input?: SubmitCopyrightJobRequestInput;
  /**
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example_result.mp4"}
   */
  output?: SubmitCopyrightJobRequestOutput;
  /**
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 10
   */
  totalTime?: number;
  /**
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      params: 'Params',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      input: SubmitCopyrightJobRequestInput,
      level: 'number',
      message: 'string',
      output: SubmitCopyrightJobRequestOutput,
      params: 'string',
      startTime: 'number',
      totalTime: 'number',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

