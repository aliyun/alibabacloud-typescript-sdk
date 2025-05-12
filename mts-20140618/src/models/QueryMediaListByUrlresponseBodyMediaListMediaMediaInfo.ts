// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoFormat } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoFormat";
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoStreams";


export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The format information.
   */
  format?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoFormat;
  /**
   * @remarks
   * The stream information.
   */
  streams?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoFormat,
      streams: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams,
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

