// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataFrameResultFrameSummarys extends $dara.Model {
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The label against which a captured frame is matched.
   * 
   * @example
   * violent_armedForces
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 8
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      labelSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

