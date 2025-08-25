// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanTextRequestLabels extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ad
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequestTasks extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequest extends $dara.Model {
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   */
  labels?: ScanTextRequestLabels[];
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   */
  tasks?: ScanTextRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ScanTextRequestLabels },
      tasks: { 'type': 'array', 'itemType': ScanTextRequestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

