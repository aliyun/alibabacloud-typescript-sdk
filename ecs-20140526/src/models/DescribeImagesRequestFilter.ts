// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of filter N used to query resources. Valid values:
   * 
   * *   If you set this parameter to `CreationStartTime`, you can query the resources that were created after the point in time specified by `Filter.N.Value`.
   * *   If you set this parameter to `CreationEndTime`, you can query the resources that were created before the point in time specified by `Filter.N.Value`.
   * *   If you set this parameter to `NetworkType`, you can query resources of the specified network type.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The value of filter N used to query resources. Valid values:
   * 
   * *   When `Filter.N.Key` is set to `CreationStartTime` or `CreationEndTime`, the format is `yyyy-MM-ddTHH:mmZ` in the UTC+0 time zone.
   * *   When `Filter.N.Key` is set to `NetworkType`, the valid values can be `vpc` or `classic`.
   * 
   * @example
   * 2017-12-05T22:40Z
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

