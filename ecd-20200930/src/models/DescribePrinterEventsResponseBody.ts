// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrinterEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-8fupvkhg0aayu****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * desktop-001
   */
  desktopName?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * user001
   */
  endUserId?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 5651188b-3070-d1cc-5311-75753d59****
   */
  eventId?: string;
  /**
   * @remarks
   * The printer driver name.
   * 
   * @example
   * HP LaserJet PCL 6
   */
  printerDriver?: string;
  /**
   * @remarks
   * The number of copies to print.
   * 
   * @example
   * 1
   */
  printerJobCopies?: number;
  /**
   * @remarks
   * The print job name.
   * 
   * @example
   * report.pdf
   */
  printerJobName?: string;
  /**
   * @remarks
   * The total number of pages in the print job.
   * 
   * @example
   * 1
   */
  printerJobPages?: number;
  /**
   * @remarks
   * The number of printed pages.
   * 
   * @example
   * 1
   */
  printerJobPrintedPages?: number;
  /**
   * @remarks
   * The print job size, in bytes.
   * 
   * @example
   * 2632446
   */
  printerJobSize?: number;
  /**
   * @remarks
   * The print job time, in millisecond-precision UNIX timestamp.
   * 
   * @example
   * 1706140800000
   */
  printerJobTime?: number;
  /**
   * @remarks
   * The printer name.
   * 
   * @example
   * HP LaserJet Pro
   */
  printerName?: string;
  /**
   * @remarks
   * The printer port.
   * 
   * @example
   * USB001
   */
  printerPort?: string;
  /**
   * @remarks
   * The printer redirection type.
   * 
   * @example
   * 1
   */
  printerRedirType?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endUserId: 'EndUserId',
      eventId: 'EventId',
      printerDriver: 'PrinterDriver',
      printerJobCopies: 'PrinterJobCopies',
      printerJobName: 'PrinterJobName',
      printerJobPages: 'PrinterJobPages',
      printerJobPrintedPages: 'PrinterJobPrintedPages',
      printerJobSize: 'PrinterJobSize',
      printerJobTime: 'PrinterJobTime',
      printerName: 'PrinterName',
      printerPort: 'PrinterPort',
      printerRedirType: 'PrinterRedirType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endUserId: 'string',
      eventId: 'string',
      printerDriver: 'string',
      printerJobCopies: 'number',
      printerJobName: 'string',
      printerJobPages: 'number',
      printerJobPrintedPages: 'number',
      printerJobSize: 'number',
      printerJobTime: 'number',
      printerName: 'string',
      printerPort: 'string',
      printerRedirType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrinterEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user events.
   */
  events?: DescribePrinterEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E54EB497-D7B7-5F04-B744-D8DFA7B******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribePrinterEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

