// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplateVideoNarrowBand extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the dynamic bitrate. If this parameter is set, the average bitrate is in the range of (0, 1000000].
   * 
   * @example
   * 3000
   */
  abrmax?: number;
  /**
   * @remarks
   * The maximum ratio of the upper limit of dynamic bitrate. If this parameter is set, the value of Abrmax does not exceed x times of the source video bitrate. Valid values: (0,1.0].
   * 
   * @example
   * 1.0
   */
  maxAbrRatio?: number;
  /**
   * @remarks
   * The Narrowband HD version. Only 1.0 may be returned.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abrmax: 'Abrmax',
      maxAbrRatio: 'MaxAbrRatio',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abrmax: 'number',
      maxAbrRatio: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

