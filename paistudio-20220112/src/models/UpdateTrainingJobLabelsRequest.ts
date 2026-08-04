// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrainingJobLabelsRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * RootModelID
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * model-ad8cv770kl
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class UpdateTrainingJobLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of labels.
   */
  labels?: UpdateTrainingJobLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateTrainingJobLabelsRequestLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

