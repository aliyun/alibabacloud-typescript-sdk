// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDBClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * Tag key. If you need to add multiple tags to the target cluster at once, click **Add** to add a tag key.
   * 
   * > Up to 20 pairs of tags can be added each time, where `Tag.N.Key` corresponds to `Tag.N.Value`.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * Tag value. If you need to add multiple tags to the target cluster at once, click **Add** to add tag values.
   * 
   * > Up to 20 pairs of tags can be added each time, where `Tag.N.Value` corresponds to `Tag.N.Key`.
   * 
   * @example
   * test
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

