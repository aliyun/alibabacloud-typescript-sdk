// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUuidVulNumClassifyStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query image vulnerability statistics. Valid values:
   * - true: The Uuids parameter specifies image IDs.
   * - false: The Uuids parameter specifies host UUIDs.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  imageVul?: boolean;
  /**
   * @remarks
   * The unique identifier of the asset. If ImageVul is set to false, specify the host UUID. If ImageVul is set to true, specify the image ID. Separate multiple values with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 391abd09184cbd3743d7f5ec125d****,
   * e6aeb2a5b6004479398b0bcd1160****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      imageVul: 'ImageVul',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageVul: 'boolean',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

