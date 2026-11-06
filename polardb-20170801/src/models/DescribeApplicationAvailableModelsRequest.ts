// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationAvailableModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The application engine filter.
   * 
   * This parameter is required.
   * 
   * @example
   * mem0
   */
  applicationType?: string;
  /**
   * @remarks
   * The region ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

