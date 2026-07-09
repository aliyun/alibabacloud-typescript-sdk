// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPipelineRequestOutput extends $dara.Model {
  /**
   * @example
   * true
   */
  dataset?: boolean;
  /**
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
   * @example
   * 1735660800
   */
  fromTime?: number;
  output?: RunPipelineRequestOutput;
  /**
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

