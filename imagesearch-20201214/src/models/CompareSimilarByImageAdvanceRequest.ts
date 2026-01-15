// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CompareSimilarByImageAdvanceRequest extends $dara.Model {
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
  primaryPicContentObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=
   */
  secondaryPicContentObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      primaryPicContentObject: 'PrimaryPicContent',
      secondaryPicContentObject: 'SecondaryPicContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      primaryPicContentObject: 'Readable',
      secondaryPicContentObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

