// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaMediaInfoFormat } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoFormat";
import { QueryMediaListResponseBodyMediaListMediaMediaInfoStreams } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoStreams";


export class QueryMediaListResponseBodyMediaListMediaMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The format information.
   */
  format?: QueryMediaListResponseBodyMediaListMediaMediaInfoFormat;
  /**
   * @remarks
   * The stream information.
   */
  streams?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreams;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: QueryMediaListResponseBodyMediaListMediaMediaInfoFormat,
      streams: QueryMediaListResponseBodyMediaListMediaMediaInfoStreams,
    };
  }

  validate() {
    if(this.format && typeof (this.format as any).validate === 'function') {
      (this.format as any).validate();
    }
    if(this.streams && typeof (this.streams as any).validate === 'function') {
      (this.streams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

