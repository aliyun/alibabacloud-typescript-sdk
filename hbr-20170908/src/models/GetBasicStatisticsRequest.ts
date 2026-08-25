// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The data source type. The valid value is:
   * 
   * - **ECS_FILE**: ECS File Backup.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

