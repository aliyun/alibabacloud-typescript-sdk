// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetYikeAIAppJobRequest extends $dara.Model {
  /**
   * @example
   * cec2c13da767c090,ca3d3c9737f04586
   */
  jobIds?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

