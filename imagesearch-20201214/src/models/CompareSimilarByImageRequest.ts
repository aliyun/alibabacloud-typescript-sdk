// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareSimilarByImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  primaryPicContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  secondaryPicContent?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      primaryPicContent: 'PrimaryPicContent',
      secondaryPicContent: 'SecondaryPicContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      primaryPicContent: 'string',
      secondaryPicContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

