// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPipelineRequestOutput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to write to the target Dataset. Default value: true.
   * 
   * @example
   * true
   */
  dataset?: boolean;
  /**
   * @remarks
   * Specifies whether to return inline results in the response. Default value: false.
   * 
   * @example
   * false
   */
  inline?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      inline: 'inline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: 'boolean',
      inline: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the data processing window, in UNIX seconds. This parameter is required for SQL Pipeline and time window-based WorkItem Source. This parameter is optional for checkpoint-based WorkItem Source types such as Dataset and Logstore Pull.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The output control settings. SQL Pipeline supports overriding. WorkItem Pipeline uses the saved Sink configuration and must keep the default value.
   */
  output?: RunPipelineRequestOutput;
  /**
   * @remarks
   * The end of the data processing window, in UNIX seconds. This parameter must be provided together with fromTime and must be greater than fromTime. This parameter is optional for checkpoint-based WorkItem Source types.
   * 
   * @example
   * 1735747200
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      output: 'output',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      output: RunPipelineRequestOutput,
      toTime: 'number',
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

