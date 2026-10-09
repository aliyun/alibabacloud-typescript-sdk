// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectSpecResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the specification is free.
   * 
   * @example
   * false
   */
  free?: boolean;
  /**
   * @remarks
   * The specification code.
   * 
   * @example
   * 2C4G
   */
  spec?: string;
  /**
   * @remarks
   * Indicates whether the specification is visible.
   * 
   * @example
   * true
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      free: 'Free',
      spec: 'Spec',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      free: 'boolean',
      spec: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupabaseProjectSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Supabase project specifications.
   */
  items?: GetSupabaseProjectSpecResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The list of zone IDs that support creating Supabase projects.
   */
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetSupabaseProjectSpecResponseBodyItems },
      requestId: 'string',
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

